/* eslint-disable testing-library/prefer-screen-queries */

import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import CheckboxWithLabel from '../CheckboxWithLabel';

// Remarque : l'exécution du nettoyage afterEach se fait automatiquement pour vous dans @testing-library/react@9.0.0 ou une version supérieure.
// Démonte et nettoie le DOM après que le test soit terminé.
afterEach(cleanup);

it('CheckboxWithLabel change le texte après click', () => {
  const {queryByLabelText, getByLabelText} = render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />,
  );
  expect(queryByLabelText(/off/i)).toBeTruthy();
  fireEvent.click(getByLabelText(/off/i));
  expect(queryByLabelText(/on/i)).toBeTruthy();
});