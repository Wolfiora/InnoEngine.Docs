---
uid: api.64cb31f05820a25541bd8504dd5298d85e31769a099ce8583a008c467197a9d7
symbol: "scripting:Inno.Core.Events:M:InnoEngine.Events.Event.#ctor(InnoEngine.Events.Event)"
source: xml
reviewed: 69531a9c9253832c757d23d770be4761381fbfec4110eaf76a0876db7ec32927
title: "Event.Constructor"
kind: api
owners: [Inno.Core.Events]
apiSurface: editor-script
apiScope: Runtime
---

Creates a routed representation that shares global consumption with its source event.

## Parameters

**Parameter `source`:** The original event whose consumption lifetime remains authoritative.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The source event is null.
