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

const Tower = ({towerDiscs, maxSize, onClick}) => {
  const towerStyle = {width: (maxSize + 3) * 25};
  return (
    <div className='tower' style={towerStyle} onClick={onClick}>
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

class Towers extends React.Component {
  constructor(props) {
    super(props);
    let startTower = _.range(1, this.props.discsNumber + 1);
    let discs = _.map(Array(TOWERS_NUMBER), (val, i) =>
      i === 0 ? startTower : []
    );
    this.state = {discs};
    // this.state.discs = [
    //   [1,2,4], [3], [5]
    // ]
  }

  render() {
    return (
      <div>
        {this.state.discs.map((towerDiscs, i) =>
          <Tower
            key={i+1}
            towerDiscs={towerDiscs}
            maxSize={this.props.discsNumber}
            // onClick={this.addTopDisc.bind(this)}
          />
        )}
      </div>
    );
  }

  // addTopDisc() {
  //   this.transferTopDisc(0, 2);
  // }

  transferTopDisc(source, dest) {
    this.setState((state) => {
      const disc = state.discs[source][0];

      if (source === dest) return state;
      if (state.discs[dest][0] < disc) return state;

      let discs = [...state.discs];
      discs[source] = _.tail(discs[source]);
      discs[dest] = [disc, ...state.discs[dest]];
      return {discs};
    });
  }
}

const App = () => (
  <Towers discsNumber={5} />
);

export default App;