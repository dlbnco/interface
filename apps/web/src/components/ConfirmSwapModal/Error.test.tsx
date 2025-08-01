import 'test-utils/tokens/mocks'

import Error, { PendingModalError } from 'components/ConfirmSwapModal/Error'
import { TEST_TRADE_EXACT_INPUT } from 'test-utils/constants'
import { render, screen } from 'test-utils/render'

describe('ConfirmSwapModal/Error', () => {
  it.each([
    ['classic trade', PendingModalError.CONFIRMATION_ERROR, TEST_TRADE_EXACT_INPUT, 'Swap failed'],
    ['classic trade', PendingModalError.PERMIT_ERROR, TEST_TRADE_EXACT_INPUT, 'Permit approval failed'],
    ['classic trade', PendingModalError.TOKEN_APPROVAL_ERROR, TEST_TRADE_EXACT_INPUT, 'Token approval failed'],
    ['classic trade', PendingModalError.WRAP_ERROR, TEST_TRADE_EXACT_INPUT, 'Wrap failed'],
  ])('renders %p correctly, with error= %p', async (testCaseName, errorType, trade, expectedError) => {
    const { asFragment } = render(<Error errorType={errorType} trade={trade} onRetry={jest.fn()} showTrade={true} />)
    expect(asFragment()).toMatchSnapshot()
    expect(screen.getByText(expectedError)).toBeInTheDocument()
  })
})
