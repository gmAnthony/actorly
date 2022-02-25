import ForceGraph2D from 'react-force-graph-2d';
import { useRef } from 'react';

export function ActorGraph({ data }) {
  const fgRef = useRef();

  return (
  <ForceGraph2D
    ref={fgRef}
    cooldownTicks={100}
    onEngineStop={() => fgRef.current.zoomToFit(400)}
    width={window.innerWidth - 40}
    graphData={data} 
    nodeLabel={node => node.id}
    nodeAutoColorBy="group"
    nodeCanvasObject={(node, ctx, globalScale) => {
      const label = node.id;
      const fontSize = 12/globalScale;
      ctx.font = `${fontSize}px Sans-Serif`;
      const textWidth = ctx.measureText(label).width;
      const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = node.color;
      ctx.fillText(label, node.x, node.y);

      node.__bckgDimensions = bckgDimensions;
    }}
    nodePointerAreaPaint={(node, color, ctx) => {
      ctx.fillStyle = color;
      const bckgDimensions = node.__bckgDimensions;
      bckgDimensions && ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);
    }}
  />
  )
}
