---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.253fc34c14dee447fb1c6d42ce0e369d3c23dd7b7c96440ce5cb19ff12da7498
symbol: scripting:Inno.Audio:M:InnoEngine.Audio.AudioMixerBuilder.AddBus(InnoEngine.Audio.AudioBusID,InnoEngine.Audio.AudioBusID,System.Single,System.Boolean)
title: AudioMixerBuilder.AddBus
kind: api
owners:
- Inno.Audio
apiSurface: editor-script
sourceFingerprint: f6a9f484d527a409b489efbeb075238058a9f71197d2d73fb3fa29c6d43a14dc
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable bus identifier.

**Parameter `parent`:** Parent bus identifier.

**Parameter `volume`:** Initial non-negative linear gain.

**Parameter `muted`:** Whether output is initially silenced.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when the bus identifier is invalid or duplicated.
