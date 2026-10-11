export function PageSkeleton() {
  return (
    <div style={{ minHeight: '100vh', padding: '24px', maxWidth: '1200px', margin: '0 auto' }} aria-hidden="true">
      <div style={{ height: '32px', width: '60%', background: '#e5e7eb', borderRadius: '8px', marginBottom: '16px', animation: 'pulse 1.5s ease-in-out infinite' }} />
      <div style={{ height: '16px', width: '40%', background: '#f3f4f6', borderRadius: '4px', marginBottom: '32px', animation: 'pulse 1.5s ease-in-out infinite' }} />
      <div style={{ height: '200px', background: '#f3f4f6', borderRadius: '12px', marginBottom: '24px', animation: 'pulse 1.5s ease-in-out infinite' }} />
      <div style={{ height: '16px', width: '90%', background: '#e5e7eb', borderRadius: '4px', marginBottom: '12px', animation: 'pulse 1.5s ease-in-out infinite' }} />
      <div style={{ height: '16px', width: '75%', background: '#e5e7eb', borderRadius: '4px', marginBottom: '12px', animation: 'pulse 1.5s ease-in-out infinite' }} />
      <div style={{ height: '16px', width: '85%', background: '#f3f4f6', borderRadius: '4px', animation: 'pulse 1.5s ease-in-out infinite' }} />
      <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }`}</style>
    </div>
  );
}
