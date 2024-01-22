import 'fast-text-encoding';
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { createSerializer } from 'enzyme-to-json';
import { StyleSheetTestUtils } from 'aphrodite';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
configure({ adapter: new Adapter() });

if (StyleSheetTestUtils && StyleSheetTestUtils.suppressStyleInjection) {
  StyleSheetTestUtils.suppressStyleInjection();
}
