export default function LoadingPage() {
  return (
    <div className="h-screen max-w-screen overflow-hidden flex bg-brand-dark">
      <div className="m-auto">
        <div className="loader">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </div>
  );
}
