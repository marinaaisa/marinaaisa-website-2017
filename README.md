
# Marina Aisa's website README

This website has been developed using and following the principles of <a target="_blank" href="https://github.com/MarsBased/marsman">MarsMan front-end framework</a>, project which I designed and used while working in <a target="_blank" href="https://marsbased.com/">MarsBased</a>. It's made with <a target="_blank" href="https://middlemanapp.com/">Middleman</a> and it uses Grunt to automatize SVG inline generation. You can read about how it's structured and why <a target="_blank" href="https://marsbased.com/blog/2017/01/27/how-we-created-frontend-framework-marsman-template/">here</a>.

## Development

```
npm install
bundle install
bundle exec middleman server
```

To update the SVG shapes, place the needed SVG files inside source/shapes and
call:

```
grunt svg
```
