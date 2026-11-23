---
uid: api.directory.scripting.runtime._projects.animation
title: "Animation"
kind: landing
owners: []
---

# Animation

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [Animation](../../animation/index.md) | Provides script-friendly animation control through the current runtime context. |
| [AnimationBindingID](../../animationbindingid/index.md) | Identifies one backend-neutral value destination inside an animation binding scope. |
| [AnimationBindingProvider](../../animationbindingprovider/index.md) | Applies one declared binding protocol on the owner thread; implementations never run in native callbacks. |
| [AnimationBindingProviderAttribute](../../animationbindingproviderattribute/index.md) | Declares a stable, automatically discovered animation destination protocol. |
| [AnimationClipAsset](../../animationclipasset/index.md) | Represents one imported backend-neutral collection of tracks and event markers. |
| [AnimationClock](../../animationclock/index.md) | Selects the session clock used to advance an animation playback. |
| [AnimationEventMarker](../../animationeventmarker/index.md) | Stores one stable event marker embedded in an animation clip. |
| [AnimationInterpolation](../../animationinterpolation/index.md) | Selects how values are sampled between adjacent keyframes. |
| [AnimationKeyframe](../../animationkeyframe/index.md) | Stores one timestamped value inside an animation track. |
| [AnimationMarkerEvent](../../animationmarkerevent/index.md) | Publishes a stable marker reached by one animation playback on the main runtime thread. |
| [AnimationPlaybackHandle](../../animationplaybackhandle/index.md) | Identifies one generation-checked animation playback owned by a runtime service. |
| [AnimationPlaybackState](../../animationplaybackstate/index.md) | Describes the observable lifecycle of one animation playback. |
| [AnimationPlayOptions](../../animationplayoptions/index.md) | Stores immutable options used to begin one animation playback. |
| [AnimationSample](../../animationsample/index.md) | Stores one final blended value emitted for a stable binding identifier. |
| [AnimationTarget](../../animationtarget/index.md) | Identifies a transient animation destination without retaining the destination object. |
| [AnimationTrack](../../animationtrack/index.md) | Stores one ordered value track targeting a stable binding. |
| [AnimationValue](../../animationvalue/index.md) | Stores one backend-neutral scalar, vector, or quaternion animation value. |
| [AnimationValueKind](../../animationvaluekind/index.md) | Describes the number and interpretation of components in an animation value. |
| [IAnimationBindingSink](../../ianimationbindingsink/index.md) | Receives final backend-neutral samples after runtime blending has completed. |

