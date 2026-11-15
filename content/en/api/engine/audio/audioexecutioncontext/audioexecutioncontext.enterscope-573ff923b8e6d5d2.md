---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.573ff923b8e6d5d2ce022f12f9513471d89915518a43b38d921492d9b472d0e9
symbol: engine:Inno.Audio:M:Inno.Audio.AudioExecutionContext.EnterScope(Inno.Audio.IAudioService)
title: AudioExecutionContext.EnterScope
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
reviewed: 5b76f419666871df11c13d26f9264392d050cddf31f2dd65d363c94b58390d4f

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `audio`:** Host-owned audio service exposed to script-facing operations.

## Returns

A strict last-in-first-out scope owned by the caller.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `audio` is `null`.
