
/**
 * @jest-environment jsdom
 */
import React from 'react';
import { mount } from 'enzyme';
import { Text } from 'react-native';

describe('Component tested with airbnb enzyme', () => {
  test('App mount with enzyme', () => {
    expect('grapefruit').toBe('grapefruit');
    // other tests operations
  });
});