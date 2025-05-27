export default function ContentContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={"grid grid-cols-12 gap-4 " + className} style={{ zIndex: 2 }}>
      {children}
    </div>
  );
}
