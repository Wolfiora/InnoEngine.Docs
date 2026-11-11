---
title: Play a clip against an explicit target
description: Sample animation values using a selected clock, explicit destination and generation-safe playback handle.
uid: manual.animation.play-clips
kind: how-to
owners:
  - Inno.Animation
  - Inno.Animation.Runtime
contracts:
  - project.inno-animation#target-and-service-contract
exampleMode: runtime-script
exampleProjects:
  - Inno.Animation
---
# Play a clip against an explicit target

Animation samples values from a clip and sends the resulting bindings to an explicit destination. It can drive a content system that supplies suitable providers, or run in an explicit sampling-only mode. It does not automatically discover a Transform or property from a string.

## Prerequisites

The active session must contain an animation runtime, event dispatcher and binding sink. Use a validated `AnimationClipAsset`, normally obtained through the configured asset pipeline. For object application, register providers for the clip's binding IDs and value kinds and create the target from the destination's live identity.

The helper below uses the Runtime script projection and expects its caller to supply that valid target. It preserves the complete clip's ownership boundary rather than opening an arbitrary source file.

## Start a looping playback

```csharp
using InnoEngine.Animation;

public static class ClipAnimation
{
    public static AnimationPlaybackHandle StartLoop(
        AnimationClipAsset clip,
        AnimationTarget target
    ) {
        return Animation.Play(clip, target, new AnimationPlayOptions
        {
            speed = 1f,
            weight = 1f,
            layer = 0,
            loop = true,
            clock = AnimationClock.Scaled
        });
    }
}
```

Use `AnimationTarget.samplingOnly` deliberately when no object binding should be applied. A default target is invalid. A missing provider for an ordinary target is diagnosed rather than treated as a sampling-only request.

## Target and playback lifetime

A target captures a live identity's original runtime slot and domain. It does not keep the destination object alive, and cannot be created from an unregistered detached identity. Resolving a missing, retired or incompatible destination returns no object; a replacement with the same persistent identity is not automatically the original target.

Retain the returned playback handle while controlling that playback. `Stop` or natural completion makes it stale immediately; slot reuse does not make an old handle valid again. A handle is not a durable asset or object identity. Call facade operations only while the owning execution scope remains active.

Playback copies track/keyframe data and marker payloads after validation. Editing the source clip does not change an existing playback. Start a new playback when you intentionally want the changed authoring data.

## Choose clocks, layers and markers

Scaled time follows the session's scaled frame clock; unscaled time uses its unscaled interval. Step and Linear tracks sample compatible values. Positive weights contribute within the highest active layer for each target/binding pair. Different destinations remain separate even when they use the same binding ID. Pausing stops time advancement while retaining the current sampled contribution.

Markers carry stable event IDs and neutral payload bytes through the session event dispatcher. Current forward advancement emits markers in the interval after the previous time through the new time, including crossed loop segments. A marker exactly at time zero is not emitted merely by starting playback or wrapping to zero. Do not assume a marker is a native audio callback or an owner-independent asynchronous task.

## Troubleshoot

- **Play rejects the target:** supply a live registered destination or the explicit sampling-only policy.
- **Playback runs but no object changes:** inspect `animation.binding.unavailable`, binding ID, value kind and destination compatibility.
- **A lower layer has no effect:** inspect the highest positive-weight contributor for the same target/binding pair.
- **A previous handle stops working:** check completion, explicit stop and session generation instead of reusing its slot identity.
- **Capacity is exhausted:** coordinate active playback ownership; the default 16,384-playback limit is finite and rejects additional admission.

Continue with [animation bindings](../../extending/animation-bindings.md) or the [runtime reference](../../api/projects/inno-animation-runtime.md).
