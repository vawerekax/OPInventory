"use client"
import React, { useState } from "react";
import { useZxing } from "react-zxing";

export default function BarcodeScanner() {
    const [result, setResult] = useState("");
    const [showVideoFeed, setShowVideoFeed] = useState(true);
    const { ref } = useZxing({
        onDecodeResult(result) {
            setResult(result.getText());
            setShowVideoFeed(false);
        },
    });
    return (
        <>
            {showVideoFeed && <video ref={ref} style={{ width: '100%', maxWidth: '380px', height: '100%', maxHeight: '250px' }} />}
            {!showVideoFeed && (
                <p>
                    <span>ISBN:</span>
                    <span>{result}</span>
                </p>
            )}
        </>
    );
}