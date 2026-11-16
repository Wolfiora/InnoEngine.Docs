---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.63939df3cef70d224087ddd8dbac4020622d42c83f53f359b66e4c70743fd80c
symbol: scripting:Inno.Audio:M:InnoEngine.Audio.AudioMixerBuilder.AddBus(InnoEngine.Audio.AudioBusId,InnoEngine.Audio.AudioBusId,System.Single,System.Boolean)
title: AudioMixerBuilder.AddBus
kind: api
owners:
- Inno.Audio
apiSurface: editor-script
reviewed: 1a039347c9ee4f1bee60e672a9750cdb1d5cd6366f096393e828825aafaf3736
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
