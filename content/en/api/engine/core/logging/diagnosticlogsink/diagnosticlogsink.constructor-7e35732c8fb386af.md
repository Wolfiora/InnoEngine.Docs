---
uid: api.7e35732c8fb386af9ea11a89df18e1fca81e0371830b9b0909bfd24777b5ef2c
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.DiagnosticLogSink.#ctor(Inno.Core.Diagnostics.DiagnosticHub,Inno.Core.Logging.LogRouter)"
source: xml
reviewed: 26f75af40d20e0a38487098feefebf80011f81fd213ee3ff6611adc707b304ce
title: "DiagnosticLogSink.Constructor"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Registers a log presentation for all current and future reports in one hub.

## Parameters

**Parameter `hub`:** The authoritative diagnostic owner.

**Parameter `logs`:** The borrowed destination router, which must outlive this sink.
