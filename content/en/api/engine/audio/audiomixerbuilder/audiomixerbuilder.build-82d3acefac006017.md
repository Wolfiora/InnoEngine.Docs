---
uid: api.82d3acefac006017682c07c947fc0995a6c34c3cc70c75d1605811108461c68d
symbol: "engine:Inno.Audio:M:Inno.Audio.AudioMixerBuilder.Build"
source: xml
reviewed: bcaa5a22475f8797c672cc3cc0edd2271eb5c5e9a2019c52e405bb85d8ad8167
title: "AudioMixerBuilder.Build"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Validates the graph and returns an immutable parent-before-child snapshot.

## Returns

A validated mixer graph containing the mandatory master bus.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when a parent is missing or bus routing contains a cycle.
