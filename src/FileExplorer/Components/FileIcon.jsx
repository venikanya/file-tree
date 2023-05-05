import { themeIcons } from 'seti-icons'

const FileIcon = ({ filePath }) => {
    const getIcon = themeIcons({
        blue: '#268bd2',
        grey: '#657b83',
        'grey-light': '#839496',
        green: '#859900',
        orange: '#cb4b16',
        pink: '#d33682',
        purple: '#6c71c4',
        red: '#dc322f',
        white: '#839496',
        yellow: '#b58900',
        ignore: '#586e75',
      })
    const { svg, color } = getIcon(filePath)
    return (
        <div style={{ 
            fill: color,
            width: '1.5rem',
            height: '1.5rem',
        }}
        dangerouslySetInnerHTML={{__html: svg}}
        />
    )

}

export default FileIcon