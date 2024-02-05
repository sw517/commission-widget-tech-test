import CommissionBreakdown from '@/ui/CommissionBreakdown/CommissionBreakdown';
import { render, screen } from '@testing-library/react';

describe('CommissionBreakdown', () => {
  it('renders SkeletonLoaders when loading', () => {
    const { unmount } = render(
      <CommissionBreakdown
        data={{ breakdown: [], total: 0, bands: [] }}
        loading={true}
        revenue={0}
      />
    );
    expect(screen.queryByTestId('commission-breakdown-loading')).toBeTruthy();
    unmount();
  });

  it('renders a BandPill for each breakdown item', () => {
    const data = {
      breakdown: [0, 1, 0, 0],
      total: 5,
      bands: [
        { label: '1', range: { min: 0, max: 5 }, percentage: 0 },
        { label: '2', range: { min: 5, max: 10 }, percentage: 20 },
        { label: '3', range: { min: 10, max: 20 }, percentage: 50 },
        { label: '4', range: { min: 20, max: null }, percentage: 100 },
      ],
    };
    const breakdownWrapper = render(
      <CommissionBreakdown data={data} loading={false} revenue={10} />
    );
    expect(screen.queryAllByTestId('band-pill')).toHaveLength(4);
    breakdownWrapper.unmount();
  });

  it('renders the breakdown label, percentage and amount', () => {
    const data = {
      breakdown: [0, 1, 0, 0],
      total: 5,
      bands: [
        { label: '0 - 5', range: { min: 0, max: 5 }, percentage: 0 },
        { label: '5 - 10', range: { min: 5, max: 10 }, percentage: 20 },
        { label: '10 - 20', range: { min: 10, max: 20 }, percentage: 50 },
        { label: '20+', range: { min: 20, max: null }, percentage: 100 },
      ],
    };
    const breakdownWrapper = render(
      <CommissionBreakdown data={data} loading={false} revenue={10} />
    );
    expect(screen.queryAllByTestId('band-pill')[1].textContent).toContain(
      '5 - 10'
    );
    expect(screen.queryAllByTestId('band-pill')[1].textContent).toContain(
      '20%'
    );
    expect(screen.getByTestId('breakdown-value-1').textContent).toContain('1');
    breakdownWrapper.unmount();
  });
});
