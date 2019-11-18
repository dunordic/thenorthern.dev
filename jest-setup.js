import '@testing-library/jest-dom/extend-expect'
import 'jest-chain'
import 'jest-extended'
import { reactSerializer } from 'linaria-jest'

expect.addSnapshotSerializer(reactSerializer)

global.___loader = {
  enqueue: jest.fn(),
}
