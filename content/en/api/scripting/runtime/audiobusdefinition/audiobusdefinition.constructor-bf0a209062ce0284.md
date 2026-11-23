---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.bf0a209062ce028495ca843ff0e2d944f359d3380802fec0352585795d4e39d3
symbol: scripting:Inno.Audio:M:InnoEngine.Audio.AudioBusDefinition.#ctor(InnoEngine.Audio.AudioBusID,System.Nullable{InnoEngine.Audio.AudioBusID},System.Single,System.Boolean,System.Collections.Generic.IEnumerable{InnoEngine.Audio.AudioProcessorConfiguration})
title: AudioBusDefinition.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: editor-script
sourceFingerprint: d195ab47d3ddfb637184dcdcb5842268aa7eb7c932dd9f6c9742a94b8acb7dee
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable bus identifier.

**Parameter `parent`:** Parent bus identifier, or `null` only for the master bus.

**Parameter `volume`:** Non-negative linear bus gain.

**Parameter `muted`:** Whether output from the bus is initially silenced.

**Parameter `processors`:** Ordered processor chain.
