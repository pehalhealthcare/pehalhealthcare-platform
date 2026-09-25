// src/components/common/LoadingState.tsx

export default function LoadingState({ message = 'Loading…' }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-3">
      <div className="h-8 w-8 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
      <p className="text-sm text-slate-500">{message}</p>
    </div>
  );
}
