import styles from '@/ui/LoadingSpinner.module.css';

export default function LoadingSpinner() {
  return (
    <div data-testid="loading-spinner" className={styles['spinner']}></div>
  );
}
