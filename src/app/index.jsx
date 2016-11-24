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
  const discWidth = 50 + size * 25;
  const discStyle = {
    width: discWidth + 'px',
    backgroundColor: discColours[size],
  }
  return (
    <div className='disc' style={discStyle}>
      {size}
    </div>
  );
};

const Tower = ({discs}) => (
  <div className='tower'>
    <div className='tower-pillar' />
    <div className='tower-base' />
    <div className='disc-group'>
      {discs.map((size, i) =>
        <Disc key={i} size={size} />
      )}
    </div>
  </div>
);

const Towers = ({number}) => (
  <div>
    {[...Array(number)].map((x, i) =>
      <Tower key={i+1} discs={i==0 ? [1, 3, 4] : [2, 5]} />
    )}
  </div>
);

const App = () => (
  <Towers number={3} />
);

export default App;