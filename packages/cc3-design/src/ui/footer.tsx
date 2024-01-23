export function Footer() {
  return (
    <footer className="bg-background w-full border-t">
      <div className="mx-auto flex h-20 w-full max-w-screen-2xl items-center px-4 md:px-8 lg:px-16">
        <div className="space-y-4">
          <div className="text-muted-foreground space-y-2 text-sm">
            <p>Licencia MIT</p>
            <p>
              Hecho con 💛 por{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/andrescv"
                className="hover:text-primary transition-colors"
              >
                @andrescv
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
