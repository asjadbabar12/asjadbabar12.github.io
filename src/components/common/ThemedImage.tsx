interface ThemedImageProps {
  dark: string
  light?: string
  alt: string
  className?: string
  loading?: 'eager' | 'lazy'
  width?: number
  height?: number
}

/** Shows the light-mode image on the light theme when one is provided; otherwise the single image on both. */
export function ThemedImage({ dark, light, alt, className = '', loading, width, height }: ThemedImageProps) {
  if (!light) return <img className={className} src={dark} alt={alt} loading={loading} width={width} height={height} />
  return (
    <>
      <img className={`${className} img-for-dark`} src={dark} alt={alt} loading={loading} width={width} height={height} />
      <img className={`${className} img-for-light`} src={light} alt={alt} loading={loading} width={width} height={height} />
    </>
  )
}
