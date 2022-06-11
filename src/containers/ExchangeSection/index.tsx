import { ExchangeRateTable } from '@src/components/ExchangeRateTable';
import { FC } from 'react';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import '@src/styles/containers/ExchangeSection/index.scss'
import { ArrowButton } from '@src/components/ArrowButton';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const ExchangeSection: FC = () => {
  const [[table, direction], setTable] = useState([0, 0]);
  const [tableInView, setTableInView] = useState("coins")
  
  const paginate = (newDirection: number) => {
    setTable([table + newDirection, newDirection]);
  };
  const coins = [
    {name: "Bitcoin", exchange: "1.96", trend:"down"},
    {name: "Ethereum", exchange: "0.07", trend:"up"},
    {name: "Ripple", exchange: "2.15", trend:"down"},
    {name: "Stellar", exchange: "4.96", trend:"down"},
  ]
  const commisions = [
    {name: "Bitrade", commision: "12.96"},
    {name: "Bitpreco", commision: "13.07"},
    {name: "Novadax", commision: "13.15"},
    {name: "Coinext", commision: "14.96"},
  ]
  const tables = [
    <ExchangeRateTable title='Coins' rows={coins}/>,
    <ExchangeRateTable title='Commisions' rows={commisions}/>
  ]

  const tableIndex = wrap(0, tables.length, table);

  return(
    <section className='Exchange-section'>
      <img></img>
      <h2>Visibilizamos todas las tasas de cambio.</h2>
      <p>Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.</p>
      <article>
        <div className={`Exchange-tables ${tableInView}-InView`}>
          {tableInView == "commisions" && <span onClick={() => {paginate(-1); setTableInView("coins")}}>
            <ArrowButton color="#201E1C" rotate='left'/>
          </span>}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
            key={table}
            children={tables[tableIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}/>
          </AnimatePresence>
          {tableInView == "coins" && <span onClick={() => {paginate(1); setTableInView("commisions")}}>
            <ArrowButton color="#201E1C"/>
          </span>}
        </div>
      </article>
    </section>
  );
};
