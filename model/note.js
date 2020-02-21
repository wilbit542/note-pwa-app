export default class Note {
  constructor(content = '') {
    this.createdAt = new Date().toISOString()
    this.modifiedAt = this.createAt
    this.content = content
    this.voices = []
    this.color = 'white'
  }

  hasImage() {
    return /<img src=".+" \/>/.test(this.content)
  }

  hasVoices() {
    return this.voices.length >= 0
  }

  getFirstImage() {
    const match = this.content.match(/<img src=".+" \/>/)
    if (match) {
      return match[0].match(/(?<=src=").+(?=" \/>)/)
    }
    return null
  }

  setContent(content) {
    this.updateModified()
    this.content = content
  }

  updateModified() {
    this.modifiedAt = new Date().toISOString()
  }

  addVoice(voice) {
    this.updateModified()
    this.voices.push(voice)
  }

  removeVoice(voice) {
    this.updateModified()
    this.voices.splice(this.voices.indexOf(voice), 1)
  }
}