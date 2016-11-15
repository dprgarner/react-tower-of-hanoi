import {shallow} from 'enzyme';

class Sum {
  addOne(x) {
    return x + 1;
  }
}

describe('sinon', () => {
  beforeEach(() => {
    sinon.spy(Sum.prototype, 'addOne');
  });

  afterEach(() => {
    Sum.prototype.addOne.restore();
  });

  it('works', () => {
    let instance = new Sum();
    expect(instance.addOne).to.have.not.been.called;
    expect(instance.addOne(1)).to.equal(2);
    expect(instance.addOne).to.have.been.calledOnce;
  });
});

describe('enzyme', function () {
  it('works', function () {
    const Greeter = (props) => (
      <span>{'Hello ' + props.greet + '!'}</span>
    )

    let component = shallow(<Greeter greet='world'/>);
    expect(component.text()).to.equal('Hello world!');
  });
});
