import React from 'react';
import { Facebook, Linkedin } from 'lucide-react';

export const PinterestIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="currentColor"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
  </svg>
);

export interface SocialLinkItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  ariaLabel: string;
}

export const socialLinks: SocialLinkItem[] = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/HOAFeeCalculator/',
    icon: Facebook,
    ariaLabel: 'HOA Fee Calculator on Facebook',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/hoa-fee-calculator/',
    icon: Linkedin,
    ariaLabel: 'HOA Fee Calculator on LinkedIn',
  },
  {
    name: 'Pinterest',
    href: 'https://www.pinterest.com/hoafeecalculator/',
    icon: PinterestIcon,
    ariaLabel: 'HOA Fee Calculator on Pinterest',
  },
];

interface SocialIconsProps {
  className?: string;
  itemClassName?: string;
}

export default function SocialIcons({ className = '', itemClassName = '' }: SocialIconsProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`} aria-label="Social media links">
      {socialLinks.map(({ name, href, icon: Icon, ariaLabel }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          title={name}
          className={`w-9 h-9 rounded-full bg-white/10 hover:bg-accent text-white flex items-center justify-center transition-all duration-200 border border-white/15 hover:border-accent hover:scale-105 active:scale-95 shadow-sm ${itemClassName}`}
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
}
