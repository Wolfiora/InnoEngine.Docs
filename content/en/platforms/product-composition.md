---
title: Understand the Editor and Player compositions
description: Separate shared hosting from the concrete product that supplies its dependencies.
uid: platforms.product-composition
kind: explanation
---
# Understand the Editor and Player compositions

A product selects implementations and supplies them to shared engine hosting. It does not create another version of Scene, Input, Assets or Editor business logic for every operating system.

Start with [launching the Editor](../getting-started/first-editor-session.md) or [publishing a Player](publish-player.md) when you need a runnable application.

## Shared hosting owns the workflow

The Editor coordinates workspace services, panels, commands and authoring lifetimes. A Player consumes deployed content and drives the runtime. The host supplies the capabilities needed by that workflow: storage, logging, rendering, input and supported module services.

Keep domain behavior behind those contracts. The selected product decides which concrete services exist; shared features do not choose them by inspecting the operating system.

## Startup and shutdown are ordered

Create dependencies before admitting work. Keep borrowed services and callbacks alive while consumers can reach them. During shutdown, stop admission, retire dependent work and release owned resources in dependency order. Cancellation requests an orderly exit; it does not authorize releasing a callback or device still in use.

See [ownership](../architecture/ownership.md), [window retirement](window-lifetime.md) and [application data](application-data.md) for the corresponding shared obligations.

## Availability belongs to the selected product

A shared runtime contract does not imply an Editor exists on every target. Product availability, device capabilities and managed deployment restrictions must be checked for the selected build. A successful documentation export is not evidence that a device or product journey passed.

This guide describes the cross-platform composition model. Concrete platform products, startup classes, SDK implementations and packaging internals have no project or API pages here.
