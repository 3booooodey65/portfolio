import { FaGithub, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const links = [
  {
    href: 'https://github.com/3booooodey65',
    label: 'GitHub',
    icon: FaGithub,
  },
  {
    href: 'https://www.facebook.com/abdalrahman.materr',
    label: 'Facebook',
    icon: FaFacebook,
  },
  {
    href: 'https://www.linkedin.com/in/abdalrahman-mater-51b9a524b/',
    label: 'LinkedIn',
    icon: FaLinkedin,
  },
  {
    href: 'https://wa.me/201030680032',
    label: 'WhatsApp',
    icon: FaWhatsapp,
  },
];

const SocialLinks = ({ direction = 'row', className = '' }) => (
  <div
    className={`flex ${
      direction === 'column' ? 'flex-col space-y-3' : 'flex-row space-x-4'
    } ${className}`.trim()}
  >
    {links.map(({ href, label, icon: Icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="text-2xl text-slate-600 transition-transform duration-200 hover:scale-110 hover:text-slate-900"
      >
        <Icon />
      </a>
    ))}
  </div>
);

export default SocialLinks;
