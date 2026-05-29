/**
 * Testimonials voor Marts Montage Service.
 * Leeg totdat er echte Google reviews zijn — we tonen liever niets dan iets verzonnens.
 */

export type Testimonial = {
  text: string
  author: string
  location: string
  project: string
  rating: 5
}

export const testimonials: Testimonial[] = []
