import { FlowRouter } from "meteor/ostrio:flow-router-extra";

Template.profile.events({
  'submit form': (e) => {
    e.preventDefault();
    Meteor.users.update(Meteor.userId(), {$set: {"profile.name": e.target.name.value}});
    return sAlert.success("Profile updated");
  },
  'click .resend-verification-link': (e) => {
    e.preventDefault();
    Meteor.call( 'sendVerificationLink', (e, r) => {
      if (e) {
        return sAlert.error(error.reason)
      }
      return sAlert.success("Please check your email to confirm your account")
    });
  }
});
