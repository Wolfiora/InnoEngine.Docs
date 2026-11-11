---
title: Understand frames, suspension and shutdown
description: Distinguish completed frames, native redraw, background suspension and safe product retirement.
uid: manual.runtime.frame-loop
kind: explanation
owners: [Inno.Shell]
contracts: [project.inno-shell]
---
# Understand frames, suspension and shutdown

Editor and Player use the same Shell frame implementation. A host chooses how frame opportunities arrive, while the Shell keeps event pumping, runtime phases, presentation and shutdown consistent.

## Frame opportunities and pacing

A polling driver runs an owner-thread loop and can wait for a software frame-rate limit. A scheduled driver awaits external opportunities, such as browser animation callbacks, without blocking its host. Both call the same frame operation on the window/rendering owner thread.

Per-Shell pacing selects VSync and an optional maximum frame rate. Zero means no software cap. Apply device VSync on the first frame and when the requested value changes, recording it only after the device call succeeds. The Editor defaults to VSync off; this does not change fixed-step simulation semantics.

## Resizing uses the same frame

Desktop modal resizing can block the ordinary event loop. The platform's redraw request advances the same clock, frame number and complete frame phases without recursively pumping events. Reentrancy protection prevents a callback from starting a second frame inside the active one.

Presentation only synchronizes size and requests drawing. It cannot independently replay Editor drawing while skipping runtime submission, device advancement or resource retirement. Managed failures stay inside the native adapter boundary until the controlled event loop can report them.

## Background suspension

Application suspension and optional primary-window-hidden suspension are independent reasons. Hiding an additional window does not suspend the main-window policy. Repeated notifications do not repeat lifecycle transitions.

While suspended, continue processing events and exit requests, but stop product, presentation and resize-redraw frames. The clock pauses and does not replay background elapsed time after resume. Held/transient input is released and background input rejected. Polling waits rather than busy-spinning.

The suspension callback runs at an owner-thread safe point; domain services can receive the same Core Events notification through their Session.

## Bounded execution is not an early-exit success

A smoke-frame request succeeds only when the requested number of actual frames completes. Closing the window early or requesting exit still follows normal cleanup but does not produce the completed-smoke marker. An acceptance caller checks that marker as well as the process exit code.

Cancellation and callback errors follow the normal stopping and resource-retirement path. See [runtime retirement](../../architecture/runtime-lifetime.md) when exit waits for tracked work or reports an incomplete owner; destroying the window or GPU first would violate the dependency order.
