---
uid: api.430a63bc7dbc4b0ccc270437929412744472d4657ef9a3b6fda2138903b93485
symbol: "engine:Inno.Adapter.Text:M:Inno.Adapter.Text.TextBackendCatalog.CreateBackend(Inno.Adapter.Text.TextBackendId)"
source: xml
reviewed: 782bbd2da8d93acee1e61fed3cc8283c0f2ae0288e316ac26ae3fbdbd4c68778
title: "TextBackendCatalog.CreateBackend"
kind: api
owners: [Inno.Adapter.Text]
apiSurface: source-clr
---

Creates one caller-owned text backend.

## Parameters

**Parameter `backend`:** The selected backend implementation.

## Returns

A newly allocated text backend.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The selected provider returned no service.
