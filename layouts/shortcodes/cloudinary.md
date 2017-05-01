{{ if eq (.Site.BaseURL) ("http://localhost:1313")}}
    http://res.cloudinary.com/chiencalme/image/fetch/{{.Site.BaseURL}}/{{ .Get 0 }}

 {{ else }}
    http://res.cloudinary.com/chiencalme/image/fetch/{{.Site.BaseURL}}/{{ .Get 0 }}
 {{ end }}
