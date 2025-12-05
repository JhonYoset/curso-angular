import { OrderPipePipe } from './order-pipe.pipe';
import * as dataRow from '../../data/tracks.json'

describe('OrderPipePipe', () => {
  it('create an instance', () => {
    const pipe = new OrderPipePipe();
    expect(pipe).toBeTruthy();
  });

  it('should validate input and output', () => {

    const pipe = new OrderPipePipe();
    const {data} : any = (dataRow as any).default
    
    const orderedList = pipe.transform(data, '')

    expect(orderedList).toEqual(data)
  });

  it('should order list by name ascending', () => {
    const pipe = new OrderPipePipe();
    const { data } : any = (dataRow as any).default;

    const firstValue = data.find((item: any) => item._id === 7);
    
    const lastValue = data.find((item: any) => item._id === 6);

    const orderedList = pipe.transform(data, 'name', 'asc');

    expect(orderedList[0].name).toBe(firstValue.name);
    expect(orderedList[orderedList.length - 1].name).toBe(lastValue.name);
  });

  it('should order list by name descending', () => {
    const pipe = new OrderPipePipe();
    const { data }: any = (dataRow as any).default;

    const firstValue = data.find((item: any) => item._id === 7);
    
    const lastValue = data.find((item: any) => item._id === 6);

    const orderedList = pipe.transform(data, 'name', 'desc');

    expect(orderedList[0].name).toBe(lastValue.name);
    expect(orderedList[orderedList.length - 1].name).toBe(firstValue.name);
  });
});
