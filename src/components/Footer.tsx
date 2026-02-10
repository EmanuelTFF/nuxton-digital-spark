const Footer = () => (
  <footer className="border-t border-foreground/10 py-10 px-6">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span className="font-display font-bold text-foreground">Nuxton</span>
      <span>© {new Date().getFullYear()} Nuxton. Todos os direitos reservados.</span>
    </div>
  </footer>
);

export default Footer;
