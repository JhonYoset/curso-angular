import { OrderListPipe } from './order-list.pipe';
import * as dataRow from '../../data/tracks.json';

describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });

  it('should validate input and output', () => {

    // Arrange
    const pipe = new OrderListPipe();
    const { data }: any = (dataRow as any).default;

    // Act
    const orderedList = pipe.transform(data, null);

    // Assert
    expect(orderedList).toEqual(data);
  });

  it('should order List by name ascending',() => {
    // Arrange
    const pipe = new OrderListPipe();
    const { data }: any = (dataRow as any).default;
    const firstvalue= data.find((item: any )=> item._id === 7);
    const lastvalue= data.find((item: any )=> item._id === 6);

    // Act
    const orderedList = pipe.transform(data, 'name', 'asc');

    // Assert
    expect(orderedList[0].name).toBe(firstvalue.name);
    expect(orderedList[orderedList.length -1].name).toBe(lastvalue.name);
  });

  it('should order List by name descending', () => {
    // Arrange
    const pipe = new OrderListPipe();
    const { data }: any = (dataRow as any).default;
    const firstvalue = data.find((item: any) => item._id === 7);
    const lastvalue = data.find((item: any) => item._id === 6);

    // Act
    const orderedList = pipe.transform(data, 'name', 'desc');

    // Assert
    expect(orderedList[0].name).toBe(lastvalue.name);
    expect(orderedList[orderedList.length - 1].name).toBe(firstvalue.name);
  });
});
