---
title: Contribute to a rendered frame
description: Choose a render model, pipeline feature, graph contributor or artifact provider with explicit ownership.
uid: extending.render-frame
kind: how-to
owners: [Inno.Rendering.Runtime, Inno.Rendering]
---
# Contribute to a rendered frame

Extend the part of Rendering Runtime that owns your behavior. A model interprets domain content, a pipeline organizes drawing, a contributor adds neutral graph operations, and an artifact provider supplies compiled deployment data.

## Choose the extension boundary

| Need | Boundary |
| --- | --- |
| Interpret a new domain's content | `IRenderModel` registered under its stable model identity. |
| Define rendering stages or optional drawing features | Pipeline/Feature extensions with declared device capabilities. |
| Add operations to the final frame graph | `IRenderFrameGraphContributor`. |
| Supply compiled shader/texture artifacts | `IRenderTargetArtifactProvider` backed by retained content. |

The engine does not require your domain to use a particular Camera, Light, PBR or 2D model. Do not add domain switches to Rendering Core to make a plugin convenient.

## Compose with live owners

The host supplies a TypeCatalog, rendering device, diagnostic reporter and appropriate artifact providers. Rendering Runtime borrows the device and owns the resource caches, targets and generations it creates. Keep content providers and their underlying stores alive for every read.

The runtime constructor composes services; it does not replace the host/subsystem frame loop. Use [runtime host composition](runtime-host.md) to keep lifecycle phases and retirement ordered.

## Capture a contribution snapshot

Registration changes produce a new immutable contributor collection. The frame captures one collection at its start; adding or removing contributors during that frame affects the next frame.

Registration does not transfer contributor ownership. Unregister before retirement and wait until the current captured frame can no longer call the instance. Removing an entry from the future collection alone is not permission to destroy an object still in use.

## Build inside a graph transaction

Each contributor receives its own mutation scope. Declare resources, passes, reads/writes and outputs explicitly. Accepted declarations freeze at commit; a failed contribution rolls back its changes and reports diagnostics while earlier accepted work remains intact.

Retirement Pending is not an ordinary extension failure to quarantine or suppress. Propagate it to the owning lifecycle so dependencies remain alive. Do not catch it and continue rendering with released resources.

Validate analyzes the current graph; final Compile allocates its executable form. Rendering Runtime compiles the final graph once in a normal frame, with `graphCompileCount` exposing the actual count. Repeated contributor validation does not authorize repeated full graph allocation.

## Handle absent presentation and exit

When the primary output is unavailable, skip its graph contribution and input-coordinate conversion. Independent valid offscreen outputs can continue. Do not turn a zero/minimum native allocation size into a fabricated presentation extent.

On exit, retire candidates and generations before releasing output targets, compositors, uploads and resource services. Close the device frame only after its owned work is safe; the host later destroys the borrowed device. [Render-frame ownership](../architecture/render-frame.md) and [window retirement](../platforms/window-lifetime.md) describe the related boundaries.
