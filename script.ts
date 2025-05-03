function toggleSection(header: HTMLElement): void {
  const content = header.nextElementSibling as HTMLElement;
  content.style.display = content.style.display == "block" ? "none" : "block";
}
