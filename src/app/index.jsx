const discColours = [
  'white',
  'red',
  'green',
  'cyan',
  'yellow',
  'orange',
  'magenta',
  'blue',
];

const Disc = ({size}) => {
  const discWidth = (size + 0.5) * 25;
  const discStyle = {
    width: discWidth + 'px',
    backgroundColor: discColours[size],
  };

  return (
    <div className='disc' style={discStyle}>
      {size}
    </div>
  );
};

const Tower = ({towerDiscs, maxSize}) => {
  return (
    <div className='tower' style={{width: (maxSize + 1) * 25}}>
      <div className='tower-pillar' />
      <div className='tower-base' />
      <div className='disc-group'>
        {towerDiscs.map((size, i) =>
          <Disc key={i} size={size} />
        )}
      </div>
    </div>
  )
};

const Towers = ({discs}) => (
  <div>
    {discs.map((towerDiscs, i) =>
      <Tower key={i+1} towerDiscs={towerDiscs} maxSize={5} />
    )}
  </div>
);

const App = () => (
  <Towers number={3} discs={[[1,3], [2], [4,5]]} />
);

export default App;