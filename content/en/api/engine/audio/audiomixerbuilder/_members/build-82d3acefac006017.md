---
uid: api.82d3acefac006017682c07c947fc0995a6c34c3cc70c75d1605811108461c68d
symbol: "engine:Inno.Audio:M:Inno.Audio.AudioMixerBuilder.Build"
source: xml
reviewed: 2ecdabe6dd9a99e4f58e3c52b2b4e6df7ee1f756cf38df869fa67449f9decbaa
title: "Build"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Validates the graph and returns an immutable parent-before-child snapshot.

**Returns:** A validated mixer graph containing the mandatory master bus.

**Exception `T:System.InvalidOperationException`:** Thrown when a parent is missing or bus routing contains a cycle.
