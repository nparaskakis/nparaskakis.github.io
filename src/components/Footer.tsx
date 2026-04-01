const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-4xl mx-auto px-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Nikolaos Paraskakis. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
