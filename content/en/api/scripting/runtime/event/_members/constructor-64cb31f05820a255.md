---
uid: api.64cb31f05820a25541bd8504dd5298d85e31769a099ce8583a008c467197a9d7
symbol: "scripting:Inno.Core.Events:M:InnoEngine.Events.Event.#ctor(InnoEngine.Events.Event)"
source: xml
reviewed: 610e2cc5a41afdcde6564dfa2e100272895b12062249f5863249de6fa4617e70
title: "Constructor"
kind: api
owners: [Inno.Core.Events]
apiSurface: editor-script
apiScope: Runtime
---

Creates a routed representation that shares global consumption with its source event.

**Parameter `source`:** The original event whose consumption lifetime remains authoritative.

**Exception `T:System.ArgumentNullException`:** The source event is null.
