# trackers-consent
1. yarn install or npm install on project.
2. run this command `npm run dist`
3. Have to push project on git
4. You have to add pushed project git url to package.json. For instance:
  "tracker-consent": "git+https://github.com/Dream068/tracker-consent.git"
5. yarn install or npm install
6. You can use DialogActions component in any project:
    import DialogActions from 'tracker-consent'

    return(
      <DialogActions />
    )

    this component has below language and tracker props.
    props: {
      language: 'en',
      tracker: {
        personalization: PropTypes.bool,
        analytical: PropTypes.bool,
        marketing: PropTypes.bool,
        socialMedia: PropTypes.bool,
      }
    }
