import {shallow} from 'enzyme';

describe('suite', () => {
  it('works', () => {
    expect(1+1).to.equal(2);
  });
});

describe('enzyme', function () {
  it('works', function () {
    const Greeter = (props) => (
      <span>{'Hello ' + props.greet + '!'}</span>
    )

    let component = shallow(<Greeter greet='world'/>);
    expect(component.text()).to.equal('Hello world!');
  })
});
