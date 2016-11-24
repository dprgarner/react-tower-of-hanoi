import _ from 'lodash';

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
  const discWidth = (size + 1.5) * 25;
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
  const towerStyle = {width: (maxSize + 3) * 25};
  return (
    <div className='tower' style={towerStyle}>
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

const Towers = ({towersNumber, discsNumber}) => {
  let startTower = _.range(1, discsNumber + 1);
  let discs = _.map(Array(towersNumber), (val, i) =>
    i === 0 ? startTower : []
  );

  return (
    <div>
      {discs.map((towerDiscs, i) =>
        <Tower key={i+1} towerDiscs={towerDiscs} maxSize={discsNumber} />
      )}
    </div>
  );
};

const App = () => (
  <Towers towersNumber={3} discsNumber={5} />
);

export default App;