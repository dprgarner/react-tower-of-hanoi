import _ from 'lodash';

const TOWERS_NUMBER = 3;
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

const Disc = ({size, topDisc, startDrag}) => {
  const discWidth = (size + 1.5) * 25;
  const discStyle = {
    width: discWidth + 'px',
    backgroundColor: discColours[size],
  };

  return (
    <div
      className='disc'
      style={discStyle}
      draggable={topDisc}
      onDragStart={startDrag}
    >
      <span className='disc-label'>
        {size}
      </span>
    </div>
  );
}

const Tower = ({towerDiscs, maxSize, startTopDiscDrag, dropDisc}) => (
  <div
    className='tower'
    style={{width: (maxSize + 3) * 25}}
    onDragOver={(e) => {e.preventDefault()}}
    onDrop={dropDisc}
  >
    <div className='tower-pillar' />
    <div className='tower-base' />
    <div className='disc-group'>
      {towerDiscs.map((size, i) =>
        <Disc
          key={size.toString()}
          size={size}
          topDisc={i===0}
          startDrag={startTopDiscDrag}
        />
      )}
    </div>
  </div>
);

class Towers extends React.Component {
  constructor(props) {
    super(props);
    let startTower = _.range(1, this.props.discsNumber + 1);
    let discs = _.map(Array(TOWERS_NUMBER), (val, i) =>
      i === 0 ? startTower : []
    );
    this.state = {discs};
  }

  startTopDiscDrag(activeTower) {
    this.activeTower = activeTower;
  }

  dropDisc(destTower) {
    const sourceTower = this.activeTower;
    this.activeTower = null;
    if (sourceTower === destTower || sourceTower === null) return;

    this.setState((state) => {
      const disc = state.discs[sourceTower][0];
      if (state.discs[destTower][0] < disc) return state;

      let discs = [...state.discs];
      discs[sourceTower] = _.tail(discs[sourceTower]);
      discs[destTower] = [disc, ...state.discs[destTower]];
      return {discs};
    });
  }

  render() {
    return (
      <div>
        {this.state.discs.map((towerDiscs, i) =>
          <Tower
            key={i+1}
            towerDiscs={towerDiscs}
            maxSize={this.props.discsNumber}
            startTopDiscDrag={() => this.startTopDiscDrag(i)}
            dropDisc={() => this.dropDisc(i)}
          />
        )}
      </div>
    );
  }
}

const App = () => (
  <Towers discsNumber={5} />
);

export default App;