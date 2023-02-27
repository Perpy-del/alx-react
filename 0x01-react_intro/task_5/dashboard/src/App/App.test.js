import { shallow } from "enzyme";
import App from './App';

describe('<App />', () => {
  it('Tests that App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  })

  it('Tests that App renders a <div> with a class "App-header"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header').length).toBe(1);
  })

  it('tests that App renders a <div> with a class "App-body"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-body").length).toBe(1);
  })

  it('tests that App renders a <div> with a class "App-footer"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-footer").length).toBe(1);
  });
});